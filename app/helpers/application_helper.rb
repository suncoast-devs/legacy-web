module ApplicationHelper

  def bootstrap_class_for(flash_type)
    { notice: "alert-success", alert: "alert-danger" }[flash_type.to_sym] || flash_type.to_s
  end

  def bootstrap_icon_for(flash_type)
    { notice: "ok-circle", alert: "warning-sign" }[flash_type.to_sym] || "question-sign"
  end

  def flash_messages(opts = {})
    flash.each do |msg_type, message|
      concat(content_tag(:div, message, class: "alert #{bootstrap_class_for(msg_type)} alert-dismissible", role: 'alert') do
        concat(content_tag(:button, class: 'close', data: { dismiss: 'alert' }) do
          concat content_tag(:span, '&times;'.html_safe, 'aria-hidden' => true)
          concat content_tag(:span, 'Close', class: 'sr-only')
        end)
        concat content_tag(:i, nil, class: "glyphicon glyphicon-#{bootstrap_icon_for(msg_type)}")
        concat message
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
