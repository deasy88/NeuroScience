# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

import os
import sys
import yaml
from pathlib import Path
from typing import Any, Dict
import pydata_sphinx_theme

sys.path.append(str(Path(".").resolve()))

project = 'upsidedownlabs.github.io'
copyright = '2025, Upside Down Labs'
author = 'Upside Down Labs'

# Configure PDF build and sidebar links
latex_documents = []
pdfs = []

with open('conf.yml', 'r') as conf_file:
    conf_data = yaml.safe_load(conf_file)

    pdf_build_all = True
    pdf_build = []
    if(conf_data["pdf_build"] != "all"):
        for name in conf_data["pdf_build"].split(","):
            pdf_build.append(name.lstrip())
        pdf_build_all = False

    for type, data in conf_data.items():
        # PDFs
        if(type == "PDFs"):
            for board, data in conf_data["PDFs"].items():
                name = board
                path = data['path']
                pdf = data.get('pdf', False)
                
                # PDF build details
                if(pdf and (name in pdf_build or pdf_build_all)):
                    tex_name = pdf.split('/')[-1]
                    pdfs.append((path, tex_name))
                    latex_documents.append((pdf, tex_name+".tex", "", author, "manual"))

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "sphinx_design",
    "sphinxcontrib.youtube",
    "sphinx_copybutton",
    "sphinx.ext.todo",
]

todo_include_todos = False
templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'env', ".venv"]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'pydata_sphinx_theme'
html_static_path = ['_static']
html_logo = "_static/logo/ideas.png"
html_favicon = "_static/logo/ideas.png"
html_sourcelink_suffix = ""
html_last_updated_fmt = ""
html_theme_path = [pydata_sphinx_theme.Path()]
html_baseurl = "docs.upsidedownlabs.tech"
html_css_files = [
    'css/custom.css',
]

# Pages entry without primary (left) sidebar

# html_sidebars = {

# }

html_theme_options = {
    # NAVBAR
    "navbar_align": "left",
    "navbar_start": ["navbar-logo"],
    "navbar_center": ["navbar-nav"],
    "navbar_end": ["theme-switcher"],

    # SIDEBAR KIRI
    "show_nav_level": 2,
    "navigation_depth": 3,
    "collapse_navigation": False,

    # SIDEBAR KANAN DIMATIKAN
    "secondary_sidebar_items": {
        "**": []
    },

    # KONTEN
    "content_width": "100%",
    "show_prev_next": False,

    # FOOTER
    "footer_start": ["copyright"],
    "footer_end": [],

    # LOGO DARK MODE
    "logo": {
        "image_dark": "_static/logo/ideas.png",
    },
}


html_context = {
    "display_github": True,
    "github_user": "upsidedownlabs",
    "github_repo": "upsidedownlabs.github.io",
    "github_version": "main",
    "doc_path": "",
    "conf_py_path": "",
    "show_license": True,
    "pages_url": "https://docs.upsidedownlabs.tech",
    "pages_slug": "",
    "docs_url": "https://docs.upsidedownlabs.tech",
    "edit_page_url_template": "{{ my_vcs_site }}{{ file_name }}",
    "edit_page_provider_name": "GitHub",
    "my_vcs_site": "https://github.com/upsidedownlabs/upsidedownlabs.github.io/edit/main",
    "pdfs": pdfs
}

# -- Options for LaTeX output --
latex_elements = {
    "papersize": "a4paper",
    "preamble": open("_static/latex/preamble.tex").read(),
}