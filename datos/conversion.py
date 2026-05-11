from pathlib import Path
import xmltodict
import json

ruta_entrada_xml = Path(__file__).parent / 'the_conections.xml'
ruta_json = Path(__file__).parent / 'the_connections.json'

with open(ruta_entrada_xml, 'r', encoding='utf-8') as f:
    xml_a_json = xmltodict.parse(f.read())
    with open(ruta_json, 'w', encoding='utf-8') as f:
        json.dump(xml_a_json, f, indent=4, ensure_ascii=False)