module.exports = {
    website: {
        js: [
            "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        ],
        css: [
            "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        ]
    },
    // Map of hooks
    hooks: {
        "page:before": function(page) {
            page.content = page.content.replace(/\[name=([^\]]+)\]/gi, `<small class="quote-name">
    <style scoped>
        small.quote-name {
            font-size: 80% !important;
        }
        small.quote-name span {
            padding-left: 2px;
        }
    </style>
    <i class="fa fa-user"></i>
    <span>$1</span>
</small>`.replace(/\n/gi, ''));
            return page;
        }
    },
    // Map of new blocks
    blocks: {},
    // Map of new filters
    filters: {}
};
