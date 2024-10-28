function Meta(m)
  quarto.doc.add_html_dependency({
    name = "falling-pumpkins",
    version = "6.0.1",
    scripts = {"assets/pumpkins.js"}
  })
  quarto.doc.include_file("after-body", "pumpkins-init.html")
end