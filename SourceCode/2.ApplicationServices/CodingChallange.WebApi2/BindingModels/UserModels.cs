using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace CodingChallange.WebApi2.Models
{
    // Models used as parameters to AccountController actions.

    public class UserModel
    {
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }

}
