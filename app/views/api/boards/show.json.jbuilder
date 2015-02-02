json.(@board, :title, :id)

json.user @board.user, :id, :email, :gravatar_url

json.members @board.members, :id, :email, :gravatar_url

json.lists @board.lists do |list|
  json.id list.id
  json.title list.title
  json.ord list.ord
  json.cards list.cards do |card|
    json.id card.id
    json.title card.title
    json.description card.description
    json.list_id card.list_id
    json.ord card.ord
    json.items card.items
  end
end
