<header class="main-header bg-plg-dark-blue w-100">
	<img class="main-header-image d-none d-md-block mx-auto pe-none" src="/img/DSC02392_Capital.png" />
	<div class="nav-wrapper container-md d-flex flex-column flex-md-row">
		<div class="col-12 col-md-4">
			<div class="top-social d-flex justify-content-between col-md-4">
				<ul class="nav">
					<li class="nav-item">
						<a class="top-social-link nav-link px-md-2 px-lg-3" href="https://www.facebook.com/PalmettoLegalGophers/" title="Facebook" target="_blank"><i class="bi bi-facebook"></i></a>
					</li>
					<li class="nav-item">
						<a class="top-social-link nav-link px-md-2 px-lg-3" href="https://www.linkedin.com/in/palmetto-legal-gophers-1abba6245" title="LinkedIn" target="_blank"><i class="bi bi-linkedin"></i></a>
					</li>
					<li class="nav-item">
						<a class="top-social-link nav-link px-md-2 px-lg-3" href="https://twitter.com/GophersLegal" title="Twitter" target="_blank"><i class="bi bi-twitter-x"></i></a>
					</li>
					<li class="nav-item d-md-none">
						<a class="top-social-link nav-link px-md-2 px-lg-3" href="mailto:jobs@palmettolegalgophers.com" title="Email Us" target="_blank"><i class="bi bi-envelope-fill"></i></a>
					</li>
					<li class="nav-item d-md-none">
						<a class="top-social-link nav-link px-md-2 px-lg-3" href="tel:8032161621" title="Call Us: 803-216-1621" target="_blank"><i class="bi bi-telephone-fill"></i></a>
					</li>
				</ul>
				<ul class="nav">
					<li class="nav-item d-md-none">
						<a class="top-social-link nav-link" href="tel:8032161621" title="Call Us: 803-216-1621" target="_blank"><span class="ps-3">803-216-1621</span></a>
					</li>
				</ul>
			</div>
		</div>
		<div class="col-12 col-md-8">
			<div class="header-nav d-none d-md-block col-md-8">
				<ul class="nav justify-content-end">
					{% for item in nav %}
						<li class="nav-item">
							<a class="top-social-link nav-link px-2 px-lg-3" href="{{ item.link }}{{ item.title }}">{{item.text}}</a>
						</li>
					{% endfor %}
				</ul>
			</div>
		</div>
	</div>
</header>
