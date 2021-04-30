function templateGenerator(templateElement, data) {
    let template = templateElement.cloneNode(true);
    template.querySelector('.sr-tile-img').src = data.image;
    let caption = template.querySelector('.sr-center-caption');
    caption.innerHTML = data.caption;
    caption.setAttribute('id', data.title);

    return template;
}
