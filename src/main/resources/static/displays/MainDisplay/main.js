

function createFooterLinks(links) {
    const ul = document.createElement('ul');
    ul.className = 'list-unstyled text-light footer-link-list';

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = 'text-decoration-none';
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    return ul;
}

const footerLinks = [
    { text: 'Luxury', href: '#' },
    { text: 'Trending', href: '#' },
    { text: 'Men\'s Glass', href: '#' },
    { text: 'Women\'s Glass', href: '#' },
    { text: 'Sunglasses', href: '#' },
    { text: 'Accessories', href: '#' },
    { text: 'Eyeglass Frames', href: '#' }
];
    