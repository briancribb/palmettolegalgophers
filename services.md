---
layout: _layouts/base.njk
title: Our Services at Palmetto Legal Gophers, Your South Carolina Process Server
permalink: /services/
author: Ron Grossberg
description: The details of our process serving services at Palmetto Legal Gophers.
---

<h2 class="fs-2">Services</h2>
<p class="lead">At Palmetto Legal Gophers, we have a proven record of serving papers for our customers safely and efficiently. We want our customers to be thrilled with our work, not just satisfied.</p>
{% image "img/gopher_sniff_wide.jpg", "A gopher sniffing the air.", "img-fluid" %}


{% for item in services.data %}
<div class="service my-3 p-3">
	<h1 class="fs-3">{{ item.title }}</h1>
	{{ item.content }}
	{% image item.img, item.alt, "img-fluid mb-3" %}
</div>
{% endfor %}

