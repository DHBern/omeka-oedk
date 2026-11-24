# omeka-oedk

Static archive of the Omeka S site(s) **Öffentlichkeiten der Kunst / Les publics des arts**, formerly at:

- `https://omeka.unibe.ch/s/oedk` → https://dhbern.github.io/omeka-oedk/s/oedk/
- `https://omeka.unibe.ch/s/oedk` → https://dhbern.github.io/omeka-oedk/s/oedk/
- `https://omeka.unibe.ch/s/lpda` → https://dhbern.github.io/omeka-oedk/s/lpda/

- Snapshot: 2026-11-24, exported with `tools/export_site.py` from [DHBern/omeka-admin](https://github.com/DHBern/omeka-admin).
- Paths are kept as in Omeka (`/s/<slug>/page/…`, `/item/…`, `/media/…`, `/item-set/…`), so old URLs are forwarded 1:1.
- Images are served from the `large` derivatives; non-image originals up to 25 MB are included. Search, filters and login are disabled.
- Larger originals are not included; they are listed in `_export/large_files.tsv` and remain in the v3 archive.
