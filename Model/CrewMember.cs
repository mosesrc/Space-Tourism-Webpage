namespace SpaceTourismWebSite.Model
{
    public class CrewMember { 
    public class Rootobject
    {
        public Crew[] crew { get; set; }
    }

    public class Crew
    {
        public string name { get; set; }
        public Images images { get; set; }
        public string role { get; set; }
        public string bio { get; set; }
    }

    public class Images
    {
        public string png { get; set; }
        public string webp { get; set; }
    }
}
}