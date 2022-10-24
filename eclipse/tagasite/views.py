from django.core.mail import EmailMultiAlternatives, send_mail
from django.template.loader import get_template
from django.shortcuts import render
import socket
from user_agents import parse

from django.core import mail

# Create your views here.

from tagasite.forms import ContactForm

socket.getaddrinfo('yourhostname.com', 80)
def main_page(request):
    # Пользователь использует мобильное устройство?
    print("МОБИЛЬНИК ИЛИ НЕТ",request.user_agent.is_mobile)
    # Определяем производителя устройства
    print("ПРОИЗВОДИТЕЛЬ",request.user_agent.device.family)
    # ОС пользователя
    print("OS",request.user_agent.os)
    # Версия операционной системы
    print("OS VERSION",request.user_agent.os.version)
    context = {}

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            send_message(form.cleaned_data['name'],form.cleaned_data['email'],form.cleaned_data['message'])
            context = {'success': 1}
    else:
        form=ContactForm()
    context['form']=form

    return render(request, 'tagasite/main_page_mobile_v2.html', context=context)
    '''
    if (request.user_agent.is_mobile == True):
        return render(request, 'tagasite/main_page_mobile_v2.html', context=context)
    else:
        return render(request, 'tagasite/main_page.html', context=context)
        '''


def send_message(name, email, message):
    text = get_template('tagasite/messsage.html')
    html = get_template('tagasite/messsage.html')
    context = {'name':name, 'email':email, 'message':message}
    subject = 'Сообщение от пользлователя'
    from_email = 'from@example.com'
    text_content = text.render(context)
    html_content = text.render(context)

    #msg = EmailMultiAlternatives(subject, text_content,from_email, ['kazzakovwv@gmail.com'])
    #msg.attach_alternative(html_content, 'text/html')
    send_mail(
        subject,
        text_content,
        from_email,
        ['kazzakovwv@gmail.com'],
        fail_silently=False,
    )

   #msg.send()
def attractions(request):
    # Пользователь использует мобильное устройство?
    print("МОБИЛЬНИК ИЛИ НЕТ", request.user_agent.is_mobile)
    # Определяем производителя устройства
    print("ПРОИЗВОДИТЕЛЬ", request.user_agent.device.family)
    # ОС пользователя
    print("OS", request.user_agent.os)
    # Версия операционной системы
    print("OS VERSION", request.user_agent.os.version)

    return render(request, 'tagasite/sights-mobile.html')
    '''
    if (request.user_agent.is_mobile == True):
        return render(request, 'tagasite/sights-mobile.html')
    else:
        return render(request, 'tagasite/attractions.html')
        '''

def history(request):
    # Пользователь использует мобильное устройство?
    print("МОБИЛЬНИК ИЛИ НЕТ", request.user_agent.is_mobile)
    # Определяем производителя устройства
    print("ПРОИЗВОДИТЕЛЬ", request.user_agent.device.family)
    # ОС пользователя
    print("OS", request.user_agent.os)
    # Версия операционной системы
    print("OS VERSION", request.user_agent.os.version)

    return render(request, 'tagasite/history-mobile.html')
    '''
    if (request.user_agent.is_mobile == True):
        return render(request, 'tagasite/history-mobile.html')
    else:
        return render(request, 'tagasite/history.html')
        '''


def It(request):
    # Пользователь использует мобильное устройство?
    print("МОБИЛЬНИК ИЛИ НЕТ", request.user_agent.is_mobile)
    # Определяем производителя устройства
    print("ПРОИЗВОДИТЕЛЬ", request.user_agent.device.family)
    # ОС пользователя
    print("OS", request.user_agent.os)
    # Версия операционной системы
    print("OS VERSION", request.user_agent.os.version)

    return render(request, 'tagasite/it-mobile.html')
    '''
    if (request.user_agent.is_mobile == True):
        return render(request, 'tagasite/it-mobile.html')
    else:
        return render(request, 'tagasite/it.html')
        '''



def abitura(request):
    # Пользователь использует мобильное устройство?
    print("МОБИЛЬНИК ИЛИ НЕТ", request.user_agent.is_mobile)
    # Определяем производителя устройства
    print("ПРОИЗВОДИТЕЛЬ", request.user_agent.device.family)
    # ОС пользователя
    print("OS", request.user_agent.os)
    # Версия операционной системы
    print("OS VERSION", request.user_agent.os.version)
    '''if (request.user_agent.is_mobile == True):
        return render(request, 'tagasite/history-mobile.html')
    else:
        return render(request, 'tagasite/history.html')'''
    return render(request, 'tagasite/abiturient.html')