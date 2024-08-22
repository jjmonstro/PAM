using HTTP_Client.ViewsModels;

namespace HTTP_Client.Views;

public partial class PostView : ContentPage
{
	public PostView()
	{
		InitializeComponent();
		BindingContext = new PostViewModel();
	}
}