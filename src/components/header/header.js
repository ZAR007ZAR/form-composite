mainObj.header =
{
	show(instance)
	{
		if(instance.classList.contains('active'))
		{
			instance.classList.remove('active')
		}
		else
		{
			instance.classList.add('active')
		}
	}
}
