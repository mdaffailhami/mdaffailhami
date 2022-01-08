import 'package:flutter/material.dart';
import 'package:simple_shadow/simple_shadow.dart';

class MyMySkillsSection extends StatelessWidget {
  const MyMySkillsSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(
        vertical: 24,
        horizontal: MediaQuery.of(context).size.width * 0.1,
      ),
      child: Column(
        children: [
          Text(
            'My Skills',
            style: Theme.of(context).textTheme.headline1,
            textAlign: TextAlign.center,
          ),
          const Divider(),
          Wrap(
            alignment: WrapAlignment.center,
            spacing: 30,
            runSpacing: 20,
            children: const [
              MySkillBadge(
                title: 'JavaScript',
                image: NetworkImage(
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
                ),
              ),
              // MySkillBadge(
              //   NetworkImage(
              //     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png',
              //   ),
              // ),
              // MySkillBadge(
              //   NetworkImage(
              //     'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Dart_programming_language_logo.svg/1024px-Dart_programming_language_logo.svg.png',
              //   ),
              // ),
              MySkillBadge(
                title: 'React',
                image: NetworkImage(
                  'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
                ),
              ),
              MySkillBadge(
                title: 'React',
                image: NetworkImage(
                  'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
                ),
              ),
              MySkillBadge(
                title: 'JavaScript',
                image: NetworkImage(
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
                ),
              ),
            ],
          )
        ],
      ),
    );
  }
}

class MySkillBadge extends StatelessWidget {
  const MySkillBadge({
    Key? key,
    required this.title,
    required this.image,
  }) : super(key: key);

  final String title;
  final ImageProvider image;

  @override
  Widget build(BuildContext context) {
    return SimpleShadow(
      sigma: 5,
      opacity: 1,
      child: Column(
        children: [
          Image(
            image: image,
            width: 140,
            height: 40,
            fit: BoxFit.contain,
          ),
          SizedBox(
            width: 160,
            child: Text(
              title,
              style: Theme.of(context).textTheme.headline3,
              textAlign: TextAlign.center,
            ),
          )
        ],
      ),
    );
  }
}
