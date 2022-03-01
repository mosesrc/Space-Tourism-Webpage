namespace SpaceTourismWebSite.Model
{
    public class Equipment
    {
        public class Rootobject
        {
            public Technology[] technology { get; set; }
        }

        public class Technology
        {
            public string name { get; set; }
            public Images images { get; set; }
            public string description { get; set; }
        }

        public class Images
        {
            public string portrait { get; set; }
            public string landscape { get; set; }
        }
    }
}
