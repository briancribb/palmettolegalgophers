const path = require("node:path");
const sass = require("sass");
const markdownIt = require("markdown-it");
const Image = require("@11ty/eleventy-img");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = async function(eleventyConfig) {
	// Configure Eleventy


	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPassthroughCopy("img");

	eleventyConfig.addTemplateFormats("scss")

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css",

		// opt-out of Eleventy Layouts
		useLayouts: false,

		compile: async function (inputContent, inputPath) {
			let parsed = path.parse(inputPath);
			// Don’t compile file names that start with an underscore
			if(parsed.name.startsWith("_")) {
				return;
			}

			let result = sass.compileString(inputContent, {
				loadPaths: [
					parsed.dir || ".",
					this.config.dir.includes,
				]
			});

			// Map dependencies for incremental builds
			this.addDependencies(inputPath, result.loadedUrls);

			return async (data) => {
				return result.css;
			};
		},
	});

	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	eleventyConfig.setLibrary("md", markdownIt(options));



  // https://www.11ty.dev/docs/plugins/image/
  // https://www.brycewray.com/posts/2021/04/using-eleventys-official-image-plugin/
  // --- START, eleventy-img
  function imageShortcode(src, alt, cls, sizes="(min-width: 1024px) 100vw, 50vw") {
    console.log(`Generating image(s) from:  ${src}`)
    let options = {
      widths: [500, 800, 1200],
      formats: ["auto"],
      urlPath: "/img/",
      outputDir: "./_site/img/",
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src)
        const name = path.basename(src, extension)
        return `${name}-${width}w.${format}`
      }
    }

    // generate images
    Image(src, options)

    let imageAttributes = {
      class: cls,
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    }
    // get metadata
    metadata = Image.statsSync(src, options)
    return Image.generateHTML(metadata, imageAttributes)
  }
  eleventyConfig.addShortcode("image", imageShortcode)
  // --- END, eleventy-img




};