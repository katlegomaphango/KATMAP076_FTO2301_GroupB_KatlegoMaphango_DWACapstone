# mock-podcast-ts.3

# User Stories
There is a total of 50 possible stories below that determine your final grade.

Each completed story that is verified by lecturer will result in you receiving towards 2% your final mark. Completing all 50 will result in a mark of 100%. Note that user stories can be completed in any order. If you are stuck on a specific one perhaps try completing another one instead.

- [ ] is deployed to a custom Netlify URL

- [ ] All views in the app display correct on the smallest mobile devices available “Iphone SE”. This can be emulated in Chrome Dev tools.

- [ ] All favicon information has been created an added correctly via https://realfavicongenerator.net/ (you are welcome to use any free PNG image you find on https://www.flaticon.com/)

- [ ] metatag information has been creataed and added via https://metatags.io/ (You are welcome to use any free image you find on https://unsplash.com/). Be mindful to manually replace all URL values (especially image URL) to absolute Netlify URL values (you will need to deploy to Netlify first)

white_check_mark All show data loaded via a fetch call from the https://podcast-api.netlify.app/shows
white_check_mark All data is loaded a fetch and no endpoint-specific data is hardcoded
white_check_mark When viewing a specific show data is loaded via fetch from individual show endpoint
white_check_mark There is a loading state while initial data is being loaded
white_check_mark There is a loading state while new data is being loaded
white_check_mark User sees the name of all available shows on the platform
white_check_mark User sees shows broken down into seasons, sorted by number
white_check_mark User has a way to listen to any episode in a season for a show
white_check_mark User is able to see a view where only episodes for a specific selected season is shown
white_check_mark User is able to toggle between different seasons for the same show
white_check_mark User sees preview image of shows when browsing
white_check_mark User sees the amount of season as number in a show when browsing
white_check_mark User sees a human-readable date to when a show was last updated
white_check_mark User sees what genres (as genre titles) a show is associated with when browsing
white_check_mark User sees a preview image of seasons for specific show
white_check_mark User sees the amount of episodes as number for a season
white_check_mark User are able to go back to a show view from an season-specific view
white_check_mark User is able to mark specific episodes as favourites so that they can find them again
white_check_mark User can visit a view where they see all their favourites
white_check_mark User is able to see the associated show and season when episode in favourite
white_check_mark Related by season/show epsiodes are grouped together in favourites
white_check_mark User is able able to remove episodes from their favourites
white_check_mark User is able to arrange list of shows based on title from A-Z
white_check_mark User is able to arrange list of shows based on title from Z-A
white_check_mark User is able to arrange list of showing the most recent updated
white_check_mark User is able to arrange list of shows from least recent updated
white_check_mark User is able to filter shows based on title by means of a text input
white_check_mark User is able to find shows based on fuzzy matching of concepts (you can use something like https://fusejs.io/)
white_check_mark User sees the date and time that I added something as a favourite
white_check_mark User is able to arrange favourites based on title from A-Z
white_check_mark User is able to arrange favourites based on title from Z-A
white_check_mark User is able to arrange favourites starting with the most recent updated
white_check_mark User is able to arrange favourites starting with the furthest back updated
white_check_mark Audio player is always visible so that user can listen to episodes while I browse
white_check_mark User receives a notification that confirms they want to close the page when audio is playing
white_check_mark App remembers what shows and episode user listened to last when returning to the platform
white_check_mark Automatically filters shows by a genre if the genre label is clicked on
white_check_mark App remembers and shows what episodes user listened all the way through
white_check_mark App remembers the exact timestamp where user stoped listening within a 10 seconds accuracy of closing
white_check_mark App remembers and shows the exact timestamp location of where I left off any episode
white_check_mark User has the option to "reset" all there progress, effectively removing their listening history.
white_check_mark User is presented with a sliding carousel of possible shows they might be interested in on the landing page
white_check_mark User is able to log in via https://app.supabase.com authentication
white_check_mark User favourites are stored in https://app.supabase.com database
white_check_mark User favourites are automatically synced when logged in, ensuring that they share favourites between devices
white_check_mark Users are able to share their favourites as a publicly accessible URL
