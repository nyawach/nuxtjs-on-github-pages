aws s3 sync \
    --profile netlify-techbook \
    --exact-timestamps \
    --delete \
    --acl public-read \
    --cache-control "no-cache" \
    --exclude "**/.*" \
    ./dist \
    s3://netlify-book/
