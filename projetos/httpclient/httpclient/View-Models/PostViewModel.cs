using CommunityToolkit.Mvvm.ComponentModel;
using httpclient.Models;
using httpclient.Services;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace httpclient.View_Models
{
    public partial class PostViewModel : ObservableObject
    {
        [ObservableProperty]
        ObservableCollection<Posts> posts;
        PostServices postServices;

        public ICommand getPostagensCommand {  get;}

        public PostViewModel() 
        {
            getPostagensCommand = new Command(getPostagens);
            postServices = new PostServices();
        }

        public async void getPostagens()
        {
            Posts = await postServices.GetPostsAsync();
        }
    }
}
