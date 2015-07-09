module ApplicationHelper

  def semantic_class_for(flash_type)
    { notice: "positive", alert: "negative" }[flash_type.to_sym] || flash_type.to_s
  end

  def semantic_icon_for(flash_type)
    { notice: "info circle", alert: "warning sign" }[flash_type.to_sym] || "question-sign"
  end

  def flash_messages
    unless flash.empty?
      concat(content_tag(:div, class: 'ui vertical container segment') do
        flash.each do |msg_type, message|
          concat(content_tag(:div, class: "ui icon floating #{semantic_class_for(msg_type)} message") do
            concat content_tag(:i, nil, class: "close icon")
            concat content_tag(:i, nil, class: "#{semantic_icon_for(msg_type)} icon")
            title, body = Array.wrap(message)
            concat(content_tag(:div, class: 'content') do
              concat content_tag(:div, title, class: 'header')
              concat content_tag(:p, body) unless body.blank?
            end)
          end)
        end
      end)
    end
    nil
  end

  def navigation_link(title, path)
    content_tag(:li, class: ('active' if current_page? path)) do
      link_to(title, path)
    end
  end

  def markdown_filter(source, options = {})
    Kramdown::Document.new(source, options).to_html.html_safe
  end
end
