using CommunityToolkit.Mvvm.ComponentModel;
using httpclient.Models;
using httpclient.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace httpclient.View_Models
{
    public partial class CreatePostViewModel : ObservableObject
    {
        [ObservableProperty]
        string title;
        [ObservableProperty]
        string body;
        [ObservableProperty]
        int id;
        [ObservableProperty]
        int userid = 2;


        public ICommand SavePostCommand {get;}

        CreatePostViewModel()
        {
            SavePostCommand = new Command(SavePost);
        }

        public async void SavePost()
        {

            Posts post = new Posts();
            Posts newPost = new Posts();
            post.Title = Title;
            post.Body = Body;
            post.UserId = userid;


            PostServices postService = new PostServices();
            newPost = await postService.SavePostAsync(post);
        }
    }
}
