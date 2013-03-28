module ApplicationHelper

  # Returns the full title on a per-page basis.
  def full_title(page_title)
    base_title = "Ajisen New York"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end
  
  # Randomize background
  def randomized_background_image
    images = ["assets/foo.jpg", "assets/random.jpg", "assets/super_random"]
    images[rand(images.size)]
  end
  
end