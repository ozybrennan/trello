json.(@board, :title, :id)

json.user @board.user, :id, :email, :gravatar_url

json.lists @board.lists, :id, :title, :ord

json.members @board.members, :id, :email, :gravatar_url
