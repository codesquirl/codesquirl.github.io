
const Menu = function() {
    let m = this;

    this.init = function() {
        let menu = document.getElementById("menu");
        m.processMenu(menu);
    }

    this.processMenuItem = function(item, index, menu) {
        let subMenus = item.getElementsByClassName("cs-submenu");
        if (subMenus.length > 0) {
            for (let si = 0; si < subMenus.length; si++) {
                UTILS.hide(subMenus[si]);
            }
            let subMenu = subMenus[0];
            m.processMenu(subMenu);
            item.addEventListener("mouseover", (e)=> {
                UTILS.show(subMenu);
            });
            item.addEventListener("mouseout", (e)=> {
                UTILS.hide(subMenu);
            });
        } else if (item.hasAttribute("data-href")) {
            let label = item.getElementsByTagName("label")[0];
            if (label !== undefined) {
                let link = document.createElement("a");
                link.href = item.getAttribute("data-href");
                link.appendChild(label);
                item.prepend(link);
            }
        }
    };

    this.processMenu = function(menu) {
        for (let i = 0; i < menu.children.length; i++) {
            let item = menu.children[i];
            if (item.classList.contains("cs-menuitem")) {
                m.processMenuItem(item, i, menu);
            } else if (item.classList.contains("cs-submenu")) {
                m.processMenu(item);
            }
        }
    };

    this.init();
};


