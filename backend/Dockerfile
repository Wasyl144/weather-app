FROM python:alpine

WORKDIR '/app'

COPY ./requirements.txt .

RUN python -m pip install -f requirements.txt

COPY . .

CMD ["python", "api.py"]
