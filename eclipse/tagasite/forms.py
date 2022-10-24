from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(
        #min_leght=2,
        widget=forms.TextInput(
            attrs={
                'placeholder':' Ваше имя', 'id':'ur-name', 'class':'form-control valid'
            }
        )
    )
    email = forms.EmailField(
        widget=forms.EmailInput(
            attrs={
                'placeholder': 'E-mail', 'id':'ur-email', 'class':'form-control valid'
            }
        )
    )
    message = forms.CharField(
        #min_leght=20,
        #мб поменять на текст инпут ибо там какой-то баг БАГБАГьаГбаГбаг
        widget=forms.Textarea(
            attrs={
                'placeholder': 'Сообщение','id':'ur-msg', 'class':'form-control w-50'
            }
        )

    )