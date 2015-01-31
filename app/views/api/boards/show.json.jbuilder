json.(@board, :title, :id)

json.user @board.user, :id, :email, :gravatar_url

# json.lists @board.lists, :id, :title, :ord

json.set! :lists do
  @board.lists.each do |list|

  end
end

json.members @board.members, :id, :email, :gravatar_url
