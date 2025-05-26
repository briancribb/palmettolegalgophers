---
layout: _layouts/base.njk
---

<p class="lead">FAQ</p>

<img class="img-fluid mb-3" src="https://placecats.com/1000/300" />

<div class="accordion accordion-faq accordion-flush mb-5" id="accordionExample">
	{% for item in faq.data %}
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed px-4 bg-plg-dark-blue text-light" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse-{{forloop.index}}" aria-expanded="false" aria-controls="faq-collapse-{{forloop.index}}">
        {{ item.question }}
      </button>
    </h2>
    <div id="faq-collapse-{{forloop.index}}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {{ item.answer }}
      </div>
    </div>
  </div>
  {% endfor %}
</div>