mainObj.news = // создали поле news в объект mainObj
{
	item: document.querySelectorAll('._item'), //создали поле item в котором лежат три тега div с классом _item
	move() // создали метод с именем move
	{
		for(let i = 1; i < this.item.length; i++) // создали цикл, который проходится по нашим тегам div с классом _item
		{
			let first = this.item[i].querySelectorAll('._wr')[0] // создали переменную first, и присвоили ей значение первых div с классом _wr
			this.item[i-1].innerHTML += first.innerHTML // мы берем текущие теги div с классом _wr и записываем их в div с классом _item
			first.remove() // удаляем исходное содержимое div с классом __wr
		}
	}	
}