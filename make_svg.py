# make_svg.py
import urllib.parse
import sys

# 1) 첫 번째 인자(혹은 stdin)에서 Data URI를 받아옵니다.
#    여기서는 argv[1] 로 받도록 했습니다.
if len(sys.argv) < 2:
    print("Usage: python make_svg.py 'data:image/svg+xml,%3csvg%20viewBox=%270%200%2024%2024%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath%20d=%27m3.0743%2010.4403…%27/%3e%3c/svg%3e'", file=sys.stderr)
    sys.exit(1)

data_uri = sys.argv[1]

# 2) 콤마 뒤에 있는 인코딩된 SVG 페이로드 분리
try:
    encoded = data_uri.split(",", 1)[1]
except IndexError:
    print("Invalid Data URI", file=sys.stderr)
    sys.exit(1)

# 3) 디코딩해서 실제 SVG 텍스트 얻기
svg_text = urllib.parse.unquote(encoded)

# 4) 파일로 저장
with open("icon.svg", "w", encoding="utf-8") as f:
    f.write(svg_text)

print("✅ icon.svg 파일이 생성되었습니다.")
