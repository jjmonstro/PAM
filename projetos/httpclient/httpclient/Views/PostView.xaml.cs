using httpclient.View_Models;

namespace httpclient.Views;

public partial class PostView : ContentPage
{
	public PostView()
	{
		InitializeComponent();
		BindingContext = new PostViewModel();
	}
}