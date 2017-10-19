###
# Compass
###
require 'susy'

# Change Compass configuration
compass_config do |config|
  config.add_import_path "#{root}/bower_components"
  config.add_import_path "#{root}/bower_components/bourbon/app/assets/stylesheets"
  config.add_import_path "#{root}/bower_components/compass-breakpoint/stylesheets"
  config.http_path = "/"
  config.css_dir = "stylesheets"
  config.sass_dir = "stylesheets"
  config.images_dir = "images"
  config.javascripts_dir = "javascripts"
end

###
# Page options, layouts, aliases and proxies
###
ignore 'README.md'

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :memories do
#   page "/memories/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end
# activate :i18n, :mount_at_root => :en
activate :directory_indexes
activate :livereload
activate :automatic_image_sizes
activate :autoprefixer do |config|
  config.browsers = ['last 1 version']
end
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

sprockets.append_path "#{root}/bower_components"

# config = YAML::load(File.open('config.yml'))

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  # activate :minify_html
  # activate :imageoptim
  # activate :gzip

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

# activate :s3_sync do |s3_sync|
#   s3_sync.bucket                = config['S3_BUCKET']
#   s3_sync.region                = config['S3_REGION']
#   s3_sync.aws_access_key_id     = config['AWS_ACCESS_KEY_ID']
#   s3_sync.aws_secret_access_key = config['AWS_SECRET_ACCESS_KEY']
#   s3_sync.delete                = true
#   s3_sync.after_build           = false
#   s3_sync.prefer_gzip           = true
# end

# default_caching_policy max_age:(60 * 60 * 24 * 365), expires: Time.now + (60 * 60 * 24 * 365 * 10)
# caching_policy 'text/html', max_age: 0, must_revalidate: true

# activate :cloudfront do |cf|
#   cf.access_key_id = config['AWS_ACCESS_KEY_ID']
#   cf.secret_access_key = config['AWS_SECRET_ACCESS_KEY']
#   cf.distribution_id = config['CF_DISTRIBUTION_ID']
#   cf.filter = /\.html$/i
# end

activate :deploy do |deploy|
  deploy.method = :git
  # Optional Settings
  deploy.remote = "git@github.com:huchenme/huchenme.github.io.git" # remote name or git url, default: origin
  deploy.branch = "master" # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
end

################
#
# Helpers
#
################

helpers do
  # def link_url(url = nil)
  #   if I18n.locale == :en
  #     url
  #   else
  #     "/#{I18n.locale}#{url}"
  #   end
  # end

  # Override default asset path to add video
  # def asset_path(kind, source)
  #   return source if source =~ /^http/
  #   asset_folder  = case kind
  #     when :css    then css_dir
  #     when :js     then js_dir
  #     when :images then images_dir
  #     else kind.to_s
  #   end
  #   source = source.to_s.gsub(/\s/, '')
  #   ignore_extension = (kind != :css && kind != :js) # don't append extension
  #   source << ".#{kind}" unless ignore_extension or source =~ /\.#{kind}/
  #   result_path   = source if source =~ %r{^/} # absolute path
  #   result_path ||= asset_url(source, asset_folder)
  #   "#{result_path}"
  # end
end
