using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HTTP_Client.Models
{
    public class Post
    {
        public int UserId { get; set; }
        public int Id { get; set; }
        public string Tittle { get; set; }
        public string Body { get; set; }
    }
}
