from lxml import etree
from pathlib import Path

ruta_xml = Path(__file__).parent.parent / 'datos' / 'datos.xml'
ruta_xslt = Path(__file__).parent / 'plantilla.xslt'
ruta_html = Path(__file__).parent / 'salida.html'

xml = etree.parse(ruta_xml)
xslt = etree.parse(ruta_xslt)
transform = etree.XSLT(xslt)
result = transform(xml)

html_output = etree.tostring(
    result,
    pretty_print=True,
    method="html",
    encoding="unicode"
)

with open(ruta_html, "w", encoding="utf-8") as f:
    f.write(html_output)

print("HTML generado correctamente")