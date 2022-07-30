using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TEST_Models.Models
{
    public class SelesMaster
    {
        [Key]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        [DisplayName("Total Quantity")]
        public int TotalQuantity { get; set; }
        [DisplayName("Total Price")]
        public int TotalPrice { get; set; }
    }
}
