
const TableOfContents = function() {
    let toc = this;

    this.init = function() {
        toc.container = document.getElementById('toc');
        if (toc.container === undefined) return;
        toc.parent = toc.container.parentElement;
        if (toc.parent === undefined) return;
        toc.content = toc.parent.getElementsByClassName('cs-toc-content')[0];
        if (toc.content === undefined) return;

        for (let ci = 0; ci < toc.content.children.length; ci++) {
            let tag = toc.content.children[ci];
            if (tag.tagName === 'H1') {
                toc.addTitle(tag);
            } else if (tag.tagName === 'H2') {
                toc.addSection(tag);
            } else if (tag.tagName === 'H3') {
                toc.addItem(tag);
            } else if (tag.tagName === 'DT' || tag.tagName === 'H4') {
                toc.addBit(tag);
            }
        }
    };

    this.addRow = function(tag, type) {
        let div = document.createElement('div');
        div.className = "cs-toc-row " + type;
        div.appendChild(document.createTextNode(tag.innerText));
        div.addEventListener("click", (e) => {
            e.preventDefault();
            toc.content.scrollTo({
                top: tag.offsetTop - toc.content.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        })
        toc.container.appendChild(div);
    };

    this.addBit = function(tag) {
        if (!tag.hasAttribute("toc-ignore")) {
            toc.addRow(tag, 'cs-toc-bit');
        }
    }
    this.addItem = function(tag) {
        toc.addRow(tag, 'cs-toc-item');
    }
    this.addTitle = function(tag) {
        toc.addRow(tag, 'cs-toc-title');
    };
    this.addSection = function(tag) {
        toc.addRow(tag, 'cs-toc-section');
    }
    this.init();
}
const TOC = new TableOfContents();