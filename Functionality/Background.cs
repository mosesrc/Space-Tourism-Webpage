namespace SpaceTourismWebSite.Functionality
{
    public class Background
    {
        public string CheckWidth(int num, string page)
        {
            string url = string.Empty;
            if (num > 768)
            {
                url = $"/assets/{page}/background-{page}-desktop.jpg";
            }
            if (num <= 768 && num > 592)
            {
                url = $"/assets/{page}/background-{page}-tablet.jpg";
            }

            if (num <= 592)
            {
                url = $"/assets/{page}/background-{page}-mobile.jpg";
            }

            return url;
        }
    }
}
