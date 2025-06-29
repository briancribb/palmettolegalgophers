<nav class="top-nav navbar d-md-none navbar-dark bg-plg-dark-blue fixed-top py-0" aria-label="Top navigation for mobile">
	<div class="container-fluid px-0">
		<a class="navbar-brand d-md-none" href="/">
			<object class="top-logo mx-md-auto text-white pe-none me-3" type="image/svg+xml" data="/img/logo/plg_logo_white.svg">
				PLG Logo <!-- fallback image in CSS -->
			</object>
			<span class="navbar-brand-short">PLG</span>
			<span class="navbar-brand-long">Palmetto Legal Gophers</span>
		</a>
		<button class="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#top-nav-menu" aria-controls="top-nav-menu" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="top-nav-menu">
		<ul class="navbar-nav me-auto mt-3 mb-2 mt-md-0 mb-md-0">
			{% for item in nav %}
				<li class="nav-item"><a class="nav-link px-3{% if page.url == item.url %} active{% endif %}" href="{{ item.url }}"{% if item.target == '_blank' %} target="_blank" {% endif %}>{{item.text}}</a></li>
			{% endfor %}
		</ul>
		</div>
	</div>
</nav>