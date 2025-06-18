---
layout: _layouts/base.njk
---

<h1 class="fs-2">Frequently Asked Questions</h1>

{% image "img/gopher_look_wide.jpg", "A gopher sniffing the air.", "img-fluid mb-3" %}

<div class="accordion accordion-faq accordion-flush mb-3" id="plg-accordion">
	{% for item in faq.data %}
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed px-4 bg-plg-dark-blue text-light" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse-{{forloop.index}}" aria-expanded="false" aria-controls="faq-collapse-{{forloop.index}}">
        {{ item.question }}
      </button>
    </h2>
    <div id="faq-collapse-{{forloop.index}}" class="accordion-collapse collapse" data-bs-parent="#plg-accordion">
      <div class="accordion-body">
        {{ item.answer }}
      </div>
    </div>
  </div>
  {% endfor %}
</div>