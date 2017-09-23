using CodingChallange.WebApi2.Utility;
using System.Net.Http;
using System.Web.Http;
using System.Linq;
using System.Net;

namespace CodingChallange.WebApi2.Controllers
{
    public class TestApiController : ApiController
    {

        // GET api/TestApi
        public HttpResponseMessage Get()
        {
            var result = UserInfo.Users.Select(o => new { UserName = o.Key, Password = o.Value }).ToList();
           
            if (result.Count > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, new { result, message = "found records" });
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "No Record Found");
            }
        }

        // GET api/TestApi/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/TestApi
        public void Post([FromBody]string value)
        {
        }

        // PUT api/TestApi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/TestApi/5
        public void Delete(int id)
        {
        }
    }
}
