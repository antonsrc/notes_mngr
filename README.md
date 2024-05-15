# notes_manager 
Менеджер заметок.  
Основные функции:
- отображение списка заметок на главной странице;
- возможность создания/удаления заметки;
- фильтрация заметок по дате создания.

Запустить скрипт можно 2-мя способами:
1. В режиме отладки (http://localhost:9000/) путем установки всех необходимых библиотек:  
__npm i__  
__npm run start__
2. Или готовую сборку (http://localhost:5500/), но для нее необходима эмуляция сервера (например через Go Live в VS Code):  
__npm run build__