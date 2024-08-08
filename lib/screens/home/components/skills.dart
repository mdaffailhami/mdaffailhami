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
            style: Theme.of(context).textTheme.headlineLarge,
            textAlign: TextAlign.center,
          ),
          const Divider(),
          Container(
            constraints: const BoxConstraints(maxWidth: 800),
            child: const Wrap(
              alignment: WrapAlignment.center,
              spacing: 20,
              runSpacing: 30,
              children: [
                MySkillItem(
                  title: 'Python',
                  image: AssetImage('assets/skill_logos/python-logo.png'),
                ),
                MySkillItem(
                  title: 'NumPy',
                  image: AssetImage('assets/skill_logos/numpy-logo.png'),
                ),
                MySkillItem(
                  title: 'Pandas',
                  image: AssetImage('assets/skill_logos/pandas-logo.png'),
                ),
                MySkillItem(
                  title: 'Plotly',
                  image: AssetImage('assets/skill_logos/plotly-logo.png'),
                ),
                MySkillItem(
                  title: 'FastAPI',
                  image: AssetImage('assets/skill_logos/fastapi-logo.png'),
                ),
                MySkillItem(
                  title: 'Dart',
                  image: AssetImage('assets/skill_logos/dart-logo.png'),
                ),
                MySkillItem(
                  title: 'Flutter',
                  image: AssetImage('assets/skill_logos/flutter-logo.png'),
                ),
                MySkillItem(
                  title: 'Linux',
                  image: AssetImage('assets/skill_logos/linux-logo.png'),
                ),
                MySkillItem(
                  title: 'Node.js',
                  image: AssetImage('assets/skill_logos/nodejs-logo.png'),
                ),
                MySkillItem(
                  title: 'React',
                  image: AssetImage('assets/skill_logos/react-logo.png'),
                ),
                MySkillItem(
                  title: 'GitHub',
                  image: AssetImage('assets/skill_logos/github-logo.png'),
                ),
                MySkillItem(
                  title: 'Figma',
                  image: AssetImage('assets/skill_logos/figma-logo.png'),
                ),
                MySkillItem(
                  title: 'PostgreSQL',
                  image: AssetImage('assets/skill_logos/postgresql-logo.png'),
                ),
                MySkillItem(
                  title: 'MongoDB',
                  image: AssetImage('assets/skill_logos/mongodb-logo.png'),
                ),
                MySkillItem(
                  title: 'Firebase',
                  image: AssetImage('assets/skill_logos/firebase-logo.png'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
