aws s3 sync \
    --dryrun \
    --profile netlify-techbook \
    --exact-timestamps \
    --delete \
    --acl public-read \
    --cache-control "no-cache" \
    --exclude "**/.*" \
    ./docs \
    s3://netlify-book/
