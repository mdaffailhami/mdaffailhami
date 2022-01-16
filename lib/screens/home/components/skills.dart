import 'package:flutter/material.dart';
import 'package:mdaffailhami/widgets/skill_item.dart';

class MySkills extends StatelessWidget {
  const MySkills({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(
        horizontal: MediaQuery.of(context).size.width * 0.06,
        vertical: 30,
      ),
      child: Column(
        children: [
          Text(
            'My Skills',
            style: Theme.of(context).textTheme.headline4,
            textAlign: TextAlign.center,
          ),
          const Divider(),
          Wrap(
            alignment: WrapAlignment.center,
            spacing: 20,
            runSpacing: 20,
            children: const [
              MySkillItem(
                title: 'JavaScript',
                image: NetworkImage(
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
                ),
              ),
              MySkillItem(
                title: 'React',
                image: NetworkImage(
                  'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
                ),
              ),
              MySkillItem(
                title: 'React',
                image: NetworkImage(
                  'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
                ),
              ),
              // MySkillItem(
              //   title: 'JavaScript',
              //   image: NetworkImage(
              //     'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
              //   ),
              // ),
            ],
          )
        ],
      ),
    );
  }
}
