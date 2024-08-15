using CommunityToolkit.Mvvm.ComponentModel;
using HTTP_Client.Models;
using HTTP_Client.Services;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace HTTP_Client.ViewsModels
{
    public partial class PostViewModel : ObservableObject
    {
        [ObservableProperty]
        ObservableCollection<Post> posts;
        PostServices postServices;
        private ICommand getPostagensComand { get; }

        public PostViewModel() 
        {
            getPostagensComand = new Command(getPostagens);
            postServices = new PostServices();
        }

        public async void getPostagens()
        {
            Posts = await postServices.GetPostsAsync();
        }
    }
}
