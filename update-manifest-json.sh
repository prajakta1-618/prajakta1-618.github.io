cd $PWD/candidate_cutouts_lcs/
ls *_lc.png | sed 's/_lc\.png//' | python3 -c "
import sys, json
ids = [line.strip() for line in sys.stdin]
print(json.dumps(ids, indent=2))
" > manifest.json
