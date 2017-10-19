**Setup**

    git clone git@github.com:huchenme/website.git
    cp config.sample.yml config.yml (and change it)
    cd website
    bundle

**Development**

    middleman
    imageoptim

**Deploy**

    middleman build
    middleman s3_sync
    middleman invalidate (optional for invalidate cloudfront assets)