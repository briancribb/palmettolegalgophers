---
layout: _layouts/base.njk
title: Palmetto Legal Gophers, Your South Carolina Process Server
permalink: /
author: Ron Grossberg
description: Uncommon Value With Uncompromising Integrity.
---

<p class="lead">At Palmetto Legal Gophers, we have a proven record of serving papers for our customers safely and efficiently. We want our customers to be thrilled with our work, not just satisfied.</p>
<!-- FACEBOOK CODE BETWEEN THESE LINES ========================================== -->
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPalmettoLegalGophers%2Fposts%2Fpfbid0tkaBnkVAmYjm9CZ1wyD9yNmN8uNsQeRVLUsk4G6UFrBXQ6p8BjMg7exBUxibsiHvl&show_text=true&width=500" width="500" height="610" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
<!-- ============================================================================ -->

When Palmetto Legal Gophers serves your papers, you can be assured we make attempts in the early morning, in the evenings, and even on weekends. We knock on neighbors' doors and try to gather information about the defendant. We check for signs of habitation such as garbage roll carts, if lights are on, etc., and we relay all of this back to our clients through our state of the art software that generates automated email messages on every attempt.

<h2 class="fs-2 mt-5">Our Services</h2>
<p class="lead">At Palmetto Legal Gophers, we have a proven record of serving papers for our customers safely and efficiently. We want our customers to be thrilled with our work, not just satisfied.</p>
{% image "img/gopher_sniff_wide.jpg", "A gopher sniffing the air.", "img-fluid" %}

{% for item in services.data %}
<div class="service my-3 p-3">
	<h3 class="fs-3">{{ item.title }}</h3>
	{{ item.content }}
	{% image item.img, item.alt, "img-fluid mb-3" %}
</div>
{% endfor %}
