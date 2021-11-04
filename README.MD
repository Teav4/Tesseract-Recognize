# Require:
docker, docker-compose

# Run
```bash
git clone https://github.com/Teav4/Tesseract-Recognize.git
cd Tesseract-Recognize
docker build -t tesseract
docker-compose up -d

curl http://localhost:3002/captcha_resolve?image_url=https://vcbdigibank.vietcombank.com.vn/w1/get-captcha/c746c716-2e61-5af4-03b8-11d67bfc27f2
```