class Organization < ActiveRecord::Base

  def self.refresh_meta_data
    all.each do |org|
      data = Meetup.group(org.meetup_id)
      next unless data.success?
      org.update_attributes(
        name: data['name'],
        photo_url:  data['group_photo']['thumb_link'],
        next_event: (data['next_event'] ? data['next_event']['name'] : 'Nothing Scheduled'),
        members: data.values_at('members', 'who').join(' '),
        description: data['description']
      )
    end
  end
end
