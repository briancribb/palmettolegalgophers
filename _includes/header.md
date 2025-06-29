<header class="header bg-plg-dark-blue w-100">
	<img class="header-image d-none d-md-block mx-auto pe-none" src="/img/DSC02392_Capital.png" />
	<div class="header-nav-wrapper container-md-fluid">
		<div class="container-md d-flex flex-column flex-md-row">
			<div class="col-12 col-md-4">
				<div class="header-social d-flex justify-content-between col-md-4">
					<ul class="nav d-md-none">
						<li class="nav-item">
							<a class="header-social-link nav-link px-md-2 px-lg-3" href="https://www.facebook.com/PalmettoLegalGophers/" title="Facebook" target="_blank"><i class="bi bi-facebook"></i></a>
						</li>
						<li class="nav-item">
							<a class="header-social-link nav-link px-md-2 px-lg-3" href="https://www.linkedin.com/in/palmetto-legal-gophers-1abba6245" title="LinkedIn" target="_blank"><i class="bi bi-linkedin"></i></a>
						</li>
						<li class="nav-item d-md-none">
							<a class="header-social-link nav-link px-md-2 px-lg-3" href="mailto:jobs@palmettolegalgophers.com" title="Email Us" target="_blank"><i class="bi bi-envelope-fill"></i></a>
						</li>
						<li class="nav-item d-md-none">
							<a class="header-social-link nav-link px-md-2 px-lg-3" href="tel:8032161621" title="Call Us: 803-216-1621" target="_blank"><i class="bi bi-telephone-fill"></i></a>
						</li>
					</ul>
					<ul class="nav justify-content-start d-none d-md-block">
						<li class="nav-item">
							<a class="header-social-link nav-link ps-0 pe-2 px-lg-3 ps-lg-0" href="/">Palmetto Legal Gophers</a>
						</li>
					</ul>
					<ul class="header-social-number nav">
						<li class="nav-item d-md-none">
							<a class="header-social-link nav-link" href="tel:8032161621" title="Call Us: 803-216-1621" target="_blank"><span class="ps-3">803-216-1621</span></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-12 col-md-8">
				<div class="header-nav d-none d-md-block col-md-8">
					<ul class="nav justify-content-end">
						{% for item in nav %}
							<li class="nav-item">
								<a class="header-social-link nav-link px-2 px-lg-3{% if page.url == item.url and item.text != 'Client Login' %} active{% endif %}" href="{{ item.url }}"{% if item.target == '_blank' %} target="_blank" {% endif %}>{{item.text}}</a>
							</li>
						{% endfor %}
					</ul>
				</div>
			</div>
		</div>
	</div>
</header>
