using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SweetStack.Startup))]
namespace SweetStack
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
